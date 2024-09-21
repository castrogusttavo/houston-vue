
<template>
  <Icon :iconName="'recycle-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Recycle03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'recycle-03'
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
