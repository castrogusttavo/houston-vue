
<template>
  <Icon :iconName="'cheese-cake-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheeseCake01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cheese-cake-01'
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
