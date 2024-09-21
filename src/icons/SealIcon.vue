
<template>
  <Icon :iconName="'seal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SealIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'seal'
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
