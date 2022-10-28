package com.osscameroon.jsgenerator.api.rest;

import com.osscameroon.jsgenerator.api.domain.Command;
import com.osscameroon.jsgenerator.api.domain.InlineOutput;
import com.osscameroon.jsgenerator.core.Configuration;
import com.osscameroon.jsgenerator.core.Converter;
import com.osscameroon.jsgenerator.core.OutputStreamResolver;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

import static com.osscameroon.jsgenerator.api.rest.ConvertController.MAPPING;
import static com.osscameroon.jsgenerator.core.OutputStreamResolver.*;
import static java.nio.charset.StandardCharsets.UTF_8;
import static org.slf4j.LoggerFactory.getLogger;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

@RestController
@RequiredArgsConstructor
@RequestMapping(MAPPING)
public class ConvertController {
    public static final String MAPPING = "/convert";
    private static final Logger LOGGER = getLogger(ConvertController.class);

    private final OutputStreamResolver inlineOutputStreamResolver;
    private final OutputStreamResolver pathOutputStreamResolver;
    private final Converter converter;

    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public List<InlineOutput> inlineAction(@RequestBody @Valid final Command command) {
        LOGGER.info("{}", command);

        final var index = new AtomicInteger();
        final var configuration = command.toConfiguration();

        return command.getInlineContents().stream()
                .map(content -> convert(
                        configuration,
                        new ByteArrayOutputStream(),
                        new ByteArrayInputStream(content.getBytes(UTF_8))))
                .map(content -> {
                    final var filename = inlineOutputStreamResolver.resolve(command.getInlinePattern(), Map.of(
                            INDEX, "%d".formatted(index.getAndIncrement()),
                            EXTENSION, command.getExtension()));

                    return new InlineOutput(filename, content);
                })
                .toList();
    }

    @PostMapping(consumes = MULTIPART_FORM_DATA_VALUE, produces = MULTIPART_FORM_DATA_VALUE)
    public MultiValueMap<String, Object> inlineAction(@RequestPart("command")
                                                      Optional<Command> optionalCommand,
                                                      @RequestPart("files") @Valid @Min(1) @Min(30)
                                                      List<MultipartFile> multipartFiles) throws IOException {
        final var command = optionalCommand.orElseGet(Command::new);
        final var map = new LinkedMultiValueMap<String, Object>();
        final var indexTracker = new AtomicInteger();

        if (!command.getInlineContents().isEmpty()) {
            inlineAction(command).forEach(output ->
                    map.add(output.getFilename(), new ByteArrayResource(output.getContent().getBytes(UTF_8))));
        }

        multipartFiles.stream().map(multipartFile -> {
                    try {
                        return convert(
                                command.toConfiguration(),
                                new ByteArrayOutputStream(),
                                new ByteArrayInputStream(multipartFile.getBytes()));
                    } catch (IOException e) {
                        throw new UnsupportedOperationException(e);
                    }
                })
                .map(content -> {
                    //noinspection ConstantConditions
                    final var filename = pathOutputStreamResolver.resolve(command.getPathPattern(), Map.of(
                            ORIGINAL, multipartFiles.get(indexTracker.get()).getOriginalFilename(),
                            INDEX, "%d".formatted(indexTracker.get()),
                            EXTENSION, command.getExtension()));

                    indexTracker.getAndIncrement();

                    return new InlineOutput(filename, content);
                })
                .forEach(output ->
                        map.add(output.getFilename(), new ByteArrayResource(output.getContent().getBytes(UTF_8))));

        return map;
    }

    private String convert(Configuration configuration, ByteArrayOutputStream outputStream, ByteArrayInputStream inputStream) {
        try {
            converter.convert(inputStream, outputStream, configuration);
        } catch (IOException exception) {
            throw new RuntimeException(exception);
        }

        return outputStream.toString(UTF_8);
    }
}
