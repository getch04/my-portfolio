'use client';

import { AppShell, Burger, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
//
import { SwitchBtn } from '@/app/components/switch/switch';

import classes from './Navbar.module.css';

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" className="justify-between items-center w-full">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div className="flex-1 flex justify-center relative">
            <MantineLogo size={30} className="absolute left-12 top-2" />
            <Group gap={4} visibleFrom="sm" className="space-x-4">
              <UnstyledButton className={classes.control}>Home</UnstyledButton>
              <UnstyledButton className={classes.control}>Experience</UnstyledButton>
              <UnstyledButton className={classes.control}>Projects</UnstyledButton>
              <UnstyledButton className={classes.control}>Contact</UnstyledButton>
            </Group>
            <div className="absolute right-12 top-2">
              <SwitchBtn />
            </div>
          </div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>Home</UnstyledButton>
        <UnstyledButton className={classes.control}>Experiance</UnstyledButton>
        <UnstyledButton className={classes.control}>Projects</UnstyledButton>
        <UnstyledButton className={classes.control}>Contact</UnstyledButton>
      </AppShell.Navbar>

      {/* <AppShell.Main>

      </AppShell.Main> */}
    </AppShell>
  );
}
