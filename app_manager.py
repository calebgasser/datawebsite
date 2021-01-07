# -*- coding: utf-8 -*-
"""
Created on Wed Jan  6 21:13:41 2021

@author: Caleb

This file is to run common comands related to the project.
"""

import argparse
import os

parser = argparse.ArgumentParser()

parser.add_argument("--run_server", action='store_true')
parser.add_argument("--build", action='store_true')
parser.add_argument("--build_front", action='store_true')
parser.add_argument("--build_back", action='store_true')

args = parser.parse_args()

def run_server():
    pass

def build_back():
    pass

def build_front():
    pass

def build():
    build_back()
    build_front()
    
if args.run_server:
    os.system('python ./django_backend/manage.py runserver')
elif args.build:
    pass
elif args.build_front:
    pass
elif args.build_back:
    pass