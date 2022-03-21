
## 2022

- ** FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear) **
    Liang He, Hong Hu, Purui Su, Yan Cai and Zhenkai Liang

    In *Proceedings of the 31st USENIX Security Symposium (USENIX 2022)*
[:octicons-file-16:](/assets/pp/he:freewill.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{he:freewill,
        
         address = {Boston, MA},
        
         author = {Liang He and Hong Hu and Purui Su and Yan Cai and Zhenkai Liang},
        
         booktitle = {Proceedings of the 31st USENIX Security Symposium (USENIX 2022)},
        
         month = {August},
        
         title = {{FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries (To Appear)}},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    

- ** Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation (To Appear) **
    Peng Xu, Yanhao Wang, Hong Hu and Purui Su

    In *Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)*
[:octicons-link-16:](https://github.com/TCA-ISCAS/Cooper)[:octicons-file-16:](/assets/pp/xu:cooper.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{xu:cooper,
        
         address = {San Diego, CA},
        
         author = {Peng Xu and Yanhao Wang and Hong Hu and Purui Su},
        
         booktitle = {Proceedings of the 29th Annual Network and Distributed System Security Symposium (NDSS 2022)},
        
         month = {April},
        
         title = {{Cooper: Testing the Binding Code of Scripting Languages with Cooperative Mutation (To Appear)}},
        
         www-url = {https://github.com/TCA-ISCAS/Cooper},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    

- ** Who Goes First? Detecting Go Concurrency Bugs via Message Reordering **
    Ziheng Liu, Shihao Xia, Yu Liang, Linhai Song and Hong Hu

    In *Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)*
[:octicons-link-16:](https://github.com/system-pclub/GFuzz)[:octicons-file-16:](/assets/pp/liu:gfuzz.pdf)[:material-presentation:](/assets/pp/liu:gfuzz-slides.pdf)

    ??? Abstract

        Go is a young programming language invented to build safe and efficient concurrent programs. It provides goroutines as lightweight threads and channels for inter-goroutine communication. Programmers are encouraged to explicitly pass messages through channels to connect goroutines, with the purpose of reducing the chance of making programming mistakes and introducing concurrency bugs. Go is one of the most beloved programming languages and has already been used to build many critical infrastructure software systems in the data-center environment. However, a recent study shows that channel-related concurrency bugs are still common in Go programs, severely hurting the reliability of Go applications.
        
        This paper presents GFuzz, a dynamic detector that can effectively pinpoint channel-related concurrency bugs by mutating the processing orders of concurrent messages. We build GFuzz in three steps. We first adopt an effective approach to identify concurrent messages and transform a program to process those messages in any given order. We then take a fuzzing approach to generate new processing orders by mutating exercised ones and rely on execution feedback to prioritize orders close to triggering bugs. Finally, we design a runtime sanitizer to capture triggered bugs that are missed by the Go runtime. We evaluate GFuzz on seven popular Go software systems, including Docker, Kubernetes, and gRPC. GFuzz finds 184 previously unknown bugs and reports a negligible number of false positives. Programmers have already confirmed 124 reports as real bugs and fixed 67 of them based on our reporting. A careful inspection of the detected concurrency bugs from gRPC shows the effectiveness of each component of GFuzz and confirms the components’ rationality.
        
        
        
    
    ??? BibTeX

        ```
        @inproceedings{liu:gfuzz,
        
         address = {Lausanne, Switzerland},
        
         author = {Ziheng Liu and Shihao Xia and Yu Liang and Linhai Song and Hong Hu},
        
         booktitle = {Proceedings of the 27th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2022)},
        
         month = {February--March},
        
         title = {{Who Goes First? Detecting Go Concurrency Bugs via Message Reordering}},
        
         www-url = {https://github.com/system-pclub/GFuzz},
        
         year = {2022}
        
        }
        
        
        
        
        ```
    
## 2021

- ** Identifying Behavior Dispatchers for Malware Analysis **
    Kyuhong Park, Burak Sahin, Yongheng Chen, Jisheng Zhao, Evan Downing, Hong Hu and Wenke Lee

    In *Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)*
[:octicons-link-16:](https://github.com/kp2bit/bdhunter)[:octicons-file-16:](/assets/pp/park:bdhunter.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{park:bdhunter,
        
         address = {Hong Kong, China},
        
         author = {Kyuhong Park and Burak Sahin and Yongheng Chen and Jisheng Zhao and Evan Downing and Hong Hu and Wenke Lee},
        
         booktitle = {Proceedings of the 16th ACM ASIA Conference on Computer and Communications Security (AsiaCCS 2021)},
        
         month = {June},
        
         title = {{Identifying Behavior Dispatchers for Malware Analysis}},
        
         www-url = {https://github.com/kp2bit/bdhunter},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- ** Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems **
    Libo Chen, Yanhao Wang, Quanpu Cai, Yunfan Zhan, Hong Hu, Jiaqi Linghu, Qinsheng Hou, Chao Zhang, Haixin Duan and Zhi Xue

    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*
[:octicons-link-16:](https://github.com/NSSL-SJTU/SaTC)[:octicons-file-16:](/assets/pp/chen:satc.pdf)[:material-presentation:](/assets/pp/chen:satc-slides.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{chen:satc,
        
         address = {Vancouver, B.C., Canada},
        
         author = {Libo Chen and Yanhao Wang and Quanpu Cai and Yunfan Zhan and Hong Hu and Jiaqi Linghu and Qinsheng Hou and Chao Zhang and Haixin Duan and Zhi Xue},
        
         booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},
        
         month = {August},
        
         title = {{Sharing More and Checking Less: Leaveraging Common Input Keywords to Detect Bugs in Embedded Systems}},
        
         www-url = {https://github.com/NSSL-SJTU/SaTC},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- ** Abusing Hidden Properties to Attack the Node.js Ecosystem **
    Feng Xiao, Jianwei Huang, Yichang Xiong, Guangliang Yang, Hong Hu, Guofei Gu and Wenke Lee

    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*
[:octicons-link-16:](https://github.com/xiaofen9/Lynx)[:octicons-file-16:](/assets/pp/xiao:lynx.pdf)[:material-presentation:](/assets/pp/xiao:lynx-slides.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{xiao:lynx,
        
         address = {Vancouver, B.C., Canada},
        
         author = {Feng Xiao and Jianwei Huang and Yichang Xiong and Guangliang Yang and Hong Hu and Guofei Gu and Wenke Lee},
        
         booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},
        
         month = {August},
        
         title = {{Abusing Hidden Properties to Attack the Node.js Ecosystem}},
        
         www-url = {https://github.com/xiaofen9/Lynx},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- ** Preventing Use-After-Free Attacks with Fast Forward Allocation **
    Brian Wickman, Hong Hu, Insu Yun, Daehee Jang, JungWon Lim, Sanidhya Kashyap and Taesoo Kim

    In *Proceedings of the 30th USENIX Security Symposium (USENIX 2021)*
[:octicons-link-16:](https://github.com/bwickman97/ffmalloc)[:octicons-file-16:](/assets/pp/wickman:ffmalloc.pdf)[:material-presentation:](/assets/pp/wickman:ffmalloc-slides.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{wickman:ffmalloc,
        
         address = {Vancouver, B.C., Canada},
        
         author = {Brian Wickman and Hong Hu and Insu Yun and Daehee Jang and JungWon Lim and Sanidhya Kashyap and Taesoo Kim},
        
         booktitle = {Proceedings of the 30th USENIX Security Symposium (USENIX 2021)},
        
         month = {August},
        
         title = {{Preventing Use-After-Free Attacks with Fast Forward Allocation}},
        
         www-url = {https://github.com/bwickman97/ffmalloc},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- ** One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation **
    Yongheng Chen, Rui Zhong, Hong Hu, Hangfan Zhang, Yupeng Yang, Dinghao Wu and Wenke Lee

    In *Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)*
[:octicons-link-16:](https://github.com/s3team/Polyglot)[:octicons-file-16:](/assets/pp/chen:polyglot.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{chen:polyglot,
        
         address = {San Francisco, CA},
        
         author = {Yongheng Chen and Rui Zhong and Hong Hu and Hangfan Zhang and Yupeng Yang and Dinghao Wu and Wenke Lee},
        
         booktitle = {Proceedings of the 42nd IEEE Symposium on Security and Privacy (Oakland 2021)},
        
         month = {May},
        
         title = {{One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation}},
        
         www-url = {https://github.com/s3team/Polyglot},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    

- ** WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning **
    Jinho Jung, Stephen Tong, Hong Hu, Jungwon Lim, Yonghwi Jin and Taesoo Kim

    In *Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)*
[:octicons-link-16:](https://github.com/sslab-gatech/winnie)[:octicons-file-16:](/assets/pp/jung:winnie.pdf)[:material-presentation:](/assets/pp/jung:winnie-slides.pdf)
    
    ??? BibTeX

        ```
        @inproceedings{jung:winnie,
        
         address = {Virtual},
        
         author = {Jinho Jung and Stephen Tong and Hong Hu and Jungwon Lim and Yonghwi Jin and Taesoo Kim},
        
         booktitle = {Proceedings of the 28th Annual Network and Distributed System Security Symposium (NDSS 2021)},
        
         month = {February},
        
         title = {{WINNIE: Fuzzing Windows Applications with Harness Synthesis and Fast Cloning}},
        
         www-url = {https://github.com/sslab-gatech/winnie},
        
         year = {2021}
        
        }
        
        
        
        
        ```
    