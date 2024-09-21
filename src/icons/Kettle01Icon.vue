
<template>
  <Icon :iconName="'kettle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Kettle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kettle-01'
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
