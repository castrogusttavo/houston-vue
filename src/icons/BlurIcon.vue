
<template>
  <Icon :iconName="'blur'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlurIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blur'
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
