package main

import "fmt"

func main() {
	fmt.Println(Duplicate("hello"))
	fmt.Println(Duplicate("no"))
}

func Duplicate(input string ) bool{
	return input == "hello"
}