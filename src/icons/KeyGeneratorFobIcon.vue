
<template>
  <Icon :iconName="'key-generator-fob'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyGeneratorFobIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'key-generator-fob'
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
