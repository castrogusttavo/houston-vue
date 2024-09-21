
<template>
  <Icon :iconName="'at'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AtIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'at'
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
