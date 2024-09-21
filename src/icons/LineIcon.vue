
<template>
  <Icon :iconName="'line'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'line'
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
