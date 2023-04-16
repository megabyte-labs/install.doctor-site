---
title: Gas Station, the Predecessor of Install Doctor
slug: gas-station-predecessor
date: 2023-02-16 14:00:00
modifiedDate: 2023-03-16 14:00:00
author: Brian Zalewski <brian@megabyte.space>
authorUrl: https://twitter.com/HillBillyHack3r
authorName: Brian Zalewski
authorImageName: brian-zalewski.png
authorDescription: Hey, my name is Brian. My friends call me BZ. I am the main driving force behind Megabyte Labs and its various offerings. Apart from optimizing my developer tool stack, my hobbies include going to the gym, partying with friends, and playing volleyball / kickball. I never turn down a conversation about AI, God, time travelers, or Jesus. I frequently think about how I can make the world a better place by inspiring others.
description: A little bit about the transition of our provisioning system from Ansible to Chezmoi
featuredImage: /gas-station-predecessor.png
featuredImageAlt: Transition from Gas Station to Install Doctor
tags: Ansible,Open-Source,Deprecated
---

When we began on our quest for our code-defined set of instructions to headlessly provision full workstations without having to micro-optimize settings after deployment, Ansible seemed to fit. However, we came up with a better solution.

## Beginning with Ansible

[Ansible](https://www.ansible.com/) is the de-facto standard for achieving what we were trying to do. This fit with our philosophy of, "choose the best software but heavily lean towards widely-accepted derivatives." It did not hurt that it had advanced features like the ability to determine the idempotence of scripts. It also has a great testing framework called [Molecule](https://github.com/ansible-community/molecule) that we did quite a bit of work adding support for testing Archlinux, CentOS, Debian, Fedora, macOS, Ubuntu, and Windows all at the same time ([example code here](https://github.com/megabyte-labs/ansible-androidstudio/tree/master/molecule)). We used Ansible for years while we slowly added more and more software to our unique stack.

## Ansible Shortcomings

However, after using Ansible for awhile, Ansible's shortcomings became apparent. For starters, you can achieve a lot more with less code using regular shell scripts. It makes things a lot more manageable when there is less code. Our original project called [Gas Station](https://github.com/megabyte-labs/gas-station) included hundreds of roles and hundreds of variables used for customization. The codebase was huge!

## Replacing Ansible with Chezmoi

We ended up introducing the use of [Chezmoi](https://www.chezmoi.io/) to manage dotfiles. It includes must-have features like built-in encryption methods, templating features, and diffs for when files change. We liked it so much that we transitioned the entire project to Chezmoi by incorporating a special [`install-program`](https://github.com/megabyte-labs/install.doctor/blob/master/home/dot_local/bin/executable_install-program) script that makes cross-OS installtions easier. It makes the installations easier because you can define installation instructions in such a way that the user can run the command `install-program android-studio` on any operating system. It works by relying a [`software.yml`](https://github.com/megabyte-labs/install.doctor/blob/master/software.yml) software definition file and then selecting the preferred installation method based on the operating system. This made it possible to replace Ansible roles with dozens of files with single lines of code. It also made it ridiculously easy to add new pieces of software to our stack.

## Chezmoi is Easier

In my opinion, Chezmoi is a lot easier to grasp. It took a few days to get the hang of, rather than weeks, even months for understanding Ansible. It, like Ansible, is wildly popular on GitHub. Another one of our philosophy's is, "choose software with a lot of GitHub stars," so Chezmoi seemed to fit. It is also hands-down probably the best way to manage dotfiles. Our dotfiles are a core part of our project which includes outstanding examples of feature-packed settings for Bash and ZSH sessions.

## Chezmoi Encourages Bash / PowerShell Scripting

Chezmoi also allowed us to transition to the use of Bash scripts (as well as some PowerShell scripts, in the case of Windows). We still leverage Ansible in some cases though. Although, we are trying to transition away from it completely, our custom installer (`install-program`) supports Ansible roles as a package manager source. Ansible is a powerful framework and it is certainly important for deploying software over SSH. It might be ideal for deploying software on a group of a 100+ VPS. However, when provisioning a single device (or even a small group of them), you might want to just give `bash <(curl -sSL https://install.doctor/start)>` a try instead of investing the additional overhead that Ansible requires.

## Ansible Roles Still Available

We plan on releasing all of our tested Ansible roles to Ansible Galaxy for public consumption but for now, if you are interested, you can check out the `roles/` folder in the [Gas Station](https://github.com/megabyte-labs/Gas-Station/tree/master/roles) project.
