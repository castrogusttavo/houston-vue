
<template>
  <Icon :iconName="'towels'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TowelsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'towels'
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
