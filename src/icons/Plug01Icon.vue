
<template>
  <Icon :iconName="'plug-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Plug01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plug-01'
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
