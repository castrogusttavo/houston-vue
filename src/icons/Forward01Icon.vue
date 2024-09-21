
<template>
  <Icon :iconName="'forward-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Forward01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'forward-01'
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
