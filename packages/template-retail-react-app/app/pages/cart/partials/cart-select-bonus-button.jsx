/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Box, Stack, Flex, Button} from '@salesforce/retail-react-app/app/components/shared/ui'

const CartBonusButton = ({handleBonusButtonClick}) => {
    return (
        <Box position="relative" width="100%">
            <Stack layerStyle="cardBordered" align="center">
                <Flex width="full" alignItems="center" backgroundColor="white">
                    <Stack spacing={3} flex={1} align="center">
                        <Button
                            onClick={handleBonusButtonClick}
                            width="100%"
                            variant="outline"
                            size="md"
                            padding="1.5rem"
                            fontWeight="bold"
                            borderColor="gray.500"
                        >
                            Select Bonus Products
                        </Button>
                    </Stack>
                </Flex>
            </Stack>
        </Box>
    )
}

// Add PropTypes validation
CartBonusButton.propTypes = {
    handleBonusButtonClick: PropTypes.func.isRequired
}

export default CartBonusButton
