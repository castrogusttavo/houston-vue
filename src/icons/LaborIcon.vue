
<template>
  <Icon :iconName="'labor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaborIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'labor'
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
