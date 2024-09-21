
<template>
  <Icon :iconName="'align-box-middle-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxMiddleLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-middle-left'
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
