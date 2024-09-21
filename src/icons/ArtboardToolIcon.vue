
<template>
  <Icon :iconName="'artboard-tool'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtboardToolIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artboard-tool'
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
