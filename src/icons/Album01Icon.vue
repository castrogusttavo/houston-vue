
<template>
  <Icon :iconName="'album-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Album01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'album-01'
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
