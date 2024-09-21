
<template>
  <Icon :iconName="'hair-clips'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HairClipsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hair-clips'
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
