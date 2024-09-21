
<template>
  <Icon :iconName="'vk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vk'
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
