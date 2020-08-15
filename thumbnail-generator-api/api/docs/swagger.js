
const getVersion = {
    tags: ['Version'],
    description: 'Returns API version',
    operationId: 'getVersion',
    responses: {
        '200': {
            description: 'Returns API version.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                            },
                            version: {
                                type: 'string',
                            }
                        }
                    }
                }
            }
        }
    }
};

const postPhoto = {
    tags: ['Photos'],
    description: 'Returns uploaded file filename',
    operationId: 'postPhoto',
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: {
                    type: 'object',
                    properties: {
                        file: {
                            required: true,
                            type: 'string',
                            format: 'binary'
                        }
                    }
                }
            }
        },
    },
    responses: {
        '200': {
            description: 'Returns uploaded file filename.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: true,
                            },
                            filenames: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    example: ['160X120_1597455670535_example.jpg']
                                }
                            }
                        }
                    }
                }
            }
        },
        '400': {
            description: 'File didn\'t send',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                            },
                            error: {
                                type: 'string',
                                example: 'Bad request',
                            }
                        }
                    }
                }
            }
        },
        '413': {
            description: 'Sent file is too large.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: false,
                            },
                            error: {
                                type: 'string',
                                example: 'File too large',
                            }
                        }
                    }
                }
            }
        },
        '415': {
            description: 'Sent file is not either PNG or JPEG.',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            success: {
                                type: 'boolean',
                                example: false,
                            },
                            error: {
                                type: 'string',
                                example: 'Unsopported media type',
                            }
                        }
                    }
                }
            }
        }
    }
};

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Thumbnail API',
        description: '',
        termsOfService: '',
        contact: {
            name: '',
            email: '',
            url: ''
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    tags: [
        { name: 'Version' },
        { name: 'Photos' }
    ],
    paths: {
        '/api/v1': {
            'get': getVersion
        },
        '/api/v1/photos': {
            'post': postPhoto
        }
    }
};

module.exports = {
    swaggerDocument,
};
