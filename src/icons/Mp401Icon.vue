
<template>
  <Icon :iconName="'mp-4-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mp401Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mp-4-01'
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
