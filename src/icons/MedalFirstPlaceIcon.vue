
<template>
  <Icon :iconName="'medal-first-place'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedalFirstPlaceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-first-place'
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
