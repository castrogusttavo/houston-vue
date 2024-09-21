
<template>
  <Icon :iconName="'sun-cloud-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunCloud01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-cloud-01'
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
