
<template>
  <Icon :iconName="'sun-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sun01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-01'
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
