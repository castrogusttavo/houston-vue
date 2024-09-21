
<template>
  <Icon :iconName="'artboard'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtboardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artboard'
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
