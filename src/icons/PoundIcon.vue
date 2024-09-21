
<template>
  <Icon :iconName="'pound'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pound'
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
