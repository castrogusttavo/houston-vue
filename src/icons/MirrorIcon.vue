
<template>
  <Icon :iconName="'mirror'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MirrorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mirror'
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
