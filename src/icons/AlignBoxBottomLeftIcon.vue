
<template>
  <Icon :iconName="'align-box-bottom-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignBoxBottomLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-box-bottom-left'
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
