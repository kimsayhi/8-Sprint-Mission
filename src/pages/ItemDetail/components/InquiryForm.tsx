export default function InquiryForm() {
  return (
    <form className="flex flex-col mb-[35px]">
      <label className="pb-4 text-lg font-bold " htmlFor="inquiry">
        문의하기
      </label>
      <textarea
        name="inquiry"
        className="rounded-xl border-none min-h-[129px] md:min-h-[104px] bg-gray-100 px-6 py-4 outline-none "
      ></textarea>
      <div className="w-full flex justify-end pt-4">
        <button
          onClick={() => {}}
          className={`w-[74px] h-[42px]  rounded-[8px] flex-center text-white bg-gray-400`}
        >
          등록
        </button>
      </div>
    </form>
  )
}
