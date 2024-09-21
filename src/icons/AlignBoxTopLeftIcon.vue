
<template>
  <Icon :iconName="'align-box-top-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxTopLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-top-left'
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
