
<template>
  <Icon :iconName="'forrst'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ForrstIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'forrst'
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
