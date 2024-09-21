
<template>
  <Icon :iconName="'deviantart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeviantartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'deviantart'
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
