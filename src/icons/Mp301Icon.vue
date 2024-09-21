
<template>
  <Icon :iconName="'mp3-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mp301Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mp3-01'
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
