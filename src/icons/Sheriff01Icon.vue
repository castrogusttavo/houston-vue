
<template>
  <Icon :iconName="'sheriff-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sheriff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sheriff-01'
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
