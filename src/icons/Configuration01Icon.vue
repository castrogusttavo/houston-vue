
<template>
  <Icon :iconName="'configuration-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Configuration01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'configuration-01'
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
