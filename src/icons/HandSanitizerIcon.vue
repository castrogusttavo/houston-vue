
<template>
  <Icon :iconName="'hand-sanitizer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandSanitizerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-sanitizer'
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
