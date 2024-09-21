
<template>
  <Icon :iconName="'caduceus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CaduceusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'caduceus'
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
