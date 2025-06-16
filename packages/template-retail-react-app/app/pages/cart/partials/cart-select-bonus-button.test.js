/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import CartSelectBonusButton from '@salesforce/retail-react-app/../../app/pages/cart/partials/cart-select-bonus-button'

describe('CartSelectBonusButton', () => {
    it('calls the onClick handler when clicked', () => {
        const handleBonusButtonClick = jest.fn() // Mock the required prop
        render(<CartSelectBonusButton handleBonusButtonClick={handleBonusButtonClick} />)

        // Simulate a click event
        const button = screen.getByRole('button', {name: /select bonus products/i})
        fireEvent.click(button)

        // Verify that the onClick handler was called
        expect(handleBonusButtonClick).toHaveBeenCalledTimes(1)
    })
})
