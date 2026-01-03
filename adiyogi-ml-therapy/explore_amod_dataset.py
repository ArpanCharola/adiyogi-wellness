from datasets import load_dataset

def main():
    ds = load_dataset("Amod/mental_health_counseling_conversations")
    print(ds)
    print(ds["train"][0])

if __name__ == "__main__":
    main()
