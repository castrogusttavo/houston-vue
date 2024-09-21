
<template>
  <Icon :iconName="'vynil-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Vynil01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vynil-01'
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
