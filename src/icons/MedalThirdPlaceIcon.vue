
<template>
  <Icon :iconName="'medal-third-place'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedalThirdPlaceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medal-third-place'
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
