
<template>
  <Icon :iconName="'cinnamon-roll'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CinnamonRollIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cinnamon-roll'
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
