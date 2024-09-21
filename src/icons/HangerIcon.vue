
<template>
  <Icon :iconName="'hanger'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HangerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hanger'
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
