
<template>
  <Icon :iconName="'vk-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VkSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vk-square'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
