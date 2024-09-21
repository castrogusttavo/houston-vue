
<template>
  <Icon :iconName="'speaker'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpeakerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'speaker'
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
