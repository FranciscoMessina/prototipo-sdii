/**
 * Link component integrated with TanStack Router for client-side navigation
 */

import * as Headless from '@headlessui/react'
import { Link as RouterLink } from '@tanstack/react-router'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: { href: string } & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <RouterLink to={props.href} {...props} ref={ref} />
    </Headless.DataInteractive>
  )
})
