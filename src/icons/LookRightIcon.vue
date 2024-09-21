
<template>
  <Icon :iconName="'look-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LookRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'look-right'
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
