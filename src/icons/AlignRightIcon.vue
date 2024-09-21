
<template>
  <Icon :iconName="'align-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlignRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'align-right'
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
